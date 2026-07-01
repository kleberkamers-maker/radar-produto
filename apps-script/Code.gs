/**
 * Radar de Produto — backend Google Apps Script
 * ------------------------------------------------------------------
 * A planilha do Google Sheets é o "banco de dados". Cada linha é uma
 * demanda; a primeira linha são os cabeçalhos (id, bu, temp, status,
 * categoria, title, desc, origem, responsavel, jira, porqueTemp,
 * proximosPassos).
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
  'bu', 'temp', 'status', 'categoria', 'title', 'desc',
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
 * POST — cria OU atualiza uma demanda.
 * Corpo esperado (Content-Type: text/plain, para evitar preflight CORS):
 *   update: { "action": "update", "id": "2", "bu": "...", ... }
 *   create: { "action": "create", "bu": "...", "temp": "...", ... }
 *   (sem `action`: vira create quando não há `id`, senão update)
 * Resposta: { ok: true, id: <id> } | { ok: false, erro: "..." }
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('Requisição sem corpo');
    }
    var dados = JSON.parse(e.postData.contents);
    var acao = dados.action || (dados.id ? 'update' : 'create');
    var id;
    if (acao === 'create') {
      id = criarDemanda(dados);
    } else {
      atualizarDemanda(dados);
      id = dados.id;
    }
    return json_({ ok: true, id: id });
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

/**
 * Cria uma nova demanda: gera o próximo `id` numérico (maior id + 1),
 * monta a linha na ordem dos cabeçalhos e adiciona ao final da planilha.
 * Retorna o id gerado.
 */
function criarDemanda(dados) {
  var sheet = planilha_();
  var valores = sheet.getDataRange().getValues();
  var headers = valores[0].map(function (h) { return String(h).trim(); });

  var idCol = headers.indexOf('id');
  if (idCol === -1) throw new Error('Coluna "id" não encontrada na planilha');

  // Próximo id = maior id numérico existente + 1.
  var maxId = 0;
  for (var i = 1; i < valores.length; i++) {
    var n = parseInt(valores[i][idCol], 10);
    if (!isNaN(n) && n > maxId) maxId = n;
  }
  var novoId = maxId + 1;

  // Monta a linha respeitando a ordem das colunas da planilha.
  var linha = headers.map(function (h) {
    if (h === 'id') return novoId;
    return dados[h] !== undefined ? dados[h] : '';
  });
  sheet.appendRow(linha);

  return novoId;
}
