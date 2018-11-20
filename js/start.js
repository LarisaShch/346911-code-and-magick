'use strict';


var CLOUD = {
  width: 420,
  height: 270,
  х: 100,
  y: 10,
  color: '#fff',
  shadow: 'rgba(0, 0, 0, 0.7)'
};
var GAP = 10;
var TEXT = {
  font: 'PT Mono',
  width: 50,
  color: '#000',
  height: 16
};
var BAR = {
  width: 40,
  height: 150,
  spacing: 50
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD.width, CLOUD.height);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
var renderText = function (ctx, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};
var renderBar = function (ctx, x, y, names, heightB) {
  if (names === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '% , 40%)';
  }
  ctx.fillRect(x, y, BAR.width, heightB);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD.x + GAP, CLOUD.y + GAP, CLOUD.shadow);
  renderCloud(ctx, CLOUD.x, CLOUD.y, CLOUD.color);

  ctx.fillStyle = TEXT.color;
  ctx.font = TEXT.font;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD.x + GAP * 14, CLOUD.y + GAP);
  ctx.fillText('Список результатов:', CLOUD.x + GAP * 2, CLOUD.y + GAP * 2 + TEXT.height);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var barHeight = (BAR.height * times[i]) / maxTime;
    var barX = CLOUD.x + BAR.spacing + (BAR.width + BAR.spacing) * i;
    var barY = CLOUD.y + CLOUD.height - GAP * 2 - TEXT.height - barHeight;


    renderText(ctx, names[i], barX, barY + TEXT.height + barHeight, '#000');
    renderText(ctx, Math.round(times[i]), barX, barY - GAP * 2, '#000');

    renderBar(ctx, barX, barY, names[i], barHeight);

  }
};
