/**
 * Radar de Produto — backend Google Apps Script
 * ------------------------------------------------------------------
 * A planilha do Google Sheets é o "banco de dados". Cada linha é uma
 * demanda; a primeira linha são os cabeçalhos (id, bu, temp, status,
 * title, desc, origem, responsavel, jira, porqueTemp, proximosPassos).
 *
 * - doGet  : devolve todas as demandas como JSON (já existente).
 * - doPost : ATUALIZA uma demanda existente, casando pela coluna `id`.
 *
 * >>> Se você JÁ tem um doGet funcionando, mantenha o seu e cole apenas
 *     doPost + atualizarDemanda abaixo dele. <<<
 *
 * Deploy (obrigatório após colar isto):
 *   Implantar > Gerenciar implementações > editar > Nova versão
 *   (ou Implantar > Nova implantação > App da Web)
 *     - Executar como: Eu
 *     - Quem tem acesso: Qualquer pessoa
 *   Mantenha a MESMA URL /exec que já está em SCRIPT_URL no index.html.
 *   O doPost só passa a responder depois de uma implantação NOVA — salvar
 *   o script não basta.
 */

// Campos que o painel de edição pode gravar. `id` nunca é alterado (é a chave).
var CAMPOS_EDITAVEIS = [
  'bu', 'temp', 'status', 'title', 'desc',
  'origem', 'responsavel', 'jira', 'porqueTemp', 'proximosPassos'
];

function planilha_() {
  return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * GET — devolve todas as linhas como array de objetos.
 * (Mantenha o seu doGet atual se ele já entrega esse formato.)
 */
function doGet() {
  var sheet = planilha_();
  var valores = sheet.getDataRange().getValues();
  var headers = valores.shift().map(function (h) { return String(h).trim(); });

  var linhas = valores
    .filter(function (r) { return r.join('').trim() !== ''; }) // ignora vazias
    .map(function (r) {
      var o = {};
      headers.forEach(function (h, i) { o[h] = r[i]; });
      return o;
    });

  return json_(linhas);
}

/**
 * POST — atualiza UMA demanda.
 * Corpo esperado (Content-Type: text/plain, para evitar preflight CORS):
 *   { "id": "d1", "bu": "...", "temp": "...", "status": "...", ... }
 * Resposta: { ok: true } | { ok: false, erro: "..." }
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('Requisição sem corpo');
    }
    var dados = JSON.parse(e.postData.contents);
    atualizarDemanda(dados);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, erro: err.message || String(err) });
  }
}

function atualizarDemanda(dados) {
  if (!dados || !dados.id) throw new Error('id ausente no payload');

  var sheet = planilha_();
  var valores = sheet.getDataRange().getValues();
  var headers = valores[0].map(function (h) { return String(h).trim(); });

  var idCol = headers.indexOf('id');
  if (idCol === -1) throw new Error('Coluna "id" não encontrada na planilha');

  // Localiza a linha pelo id (comparação por string, com trim).
  var rowNum = -1;
  for (var i = 1; i < valores.length; i++) {
    if (String(valores[i][idCol]).trim() === String(dados.id).trim()) {
      rowNum = i + 1; // getRange é 1-based
      break;
    }
  }
  if (rowNum === -1) throw new Error('Demanda não encontrada: ' + dados.id);

  // Grava só os campos editáveis que (a) existem na planilha e (b) vieram no payload.
  CAMPOS_EDITAVEIS.forEach(function (campo) {
    var col = headers.indexOf(campo);
    if (col !== -1 && dados[campo] !== undefined) {
      sheet.getRange(rowNum, col + 1).setValue(dados[campo]);
    }
  });
}
