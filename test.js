const assert = require('assert');

const reverse = require('./src');

it('Should return 261 when 162 given', () => {
  const reversed = reverse(162);

  assert.equal(reversed, 261);
});
it('Should return 291 when -192 given', () => {
  const reversed = reverse(-192);

  assert.equal(reversed, 291);
});
it('Should return 252 when -252 given', () => {
  const reversed = reverse(-252);

  assert.equal(reversed, 252);
});
it('Should return 71 when 170 given', () => {
  const reversed = reverse(170);

  assert.equal(reversed, 71);
});
it('Should return 605 when 506 given', () => {
  const reversed = reverse(506);

  assert.equal(reversed, 605);
});
it('Should return 835 when -538 given', () => {
  const reversed = reverse(-538);

  assert.equal(reversed, 835);
});
it('Should return 465 when 564 given', () => {
  const reversed = reverse(564);

  assert.equal(reversed, 465);
});
it('Should return 891 when -198 given', () => {
  const reversed = reverse(-198);

  assert.equal(reversed, 891);
});
it('Should return 715 when -517 given', () => {
  const reversed = reverse(-517);

  assert.equal(reversed, 715);
});
it('Should return 601 when -106 given', () => {
  const reversed = reverse(-106);

  assert.equal(reversed, 601);
});
it('Should return 462 when -264 given', () => {
  const reversed = reverse(-264);

  assert.equal(reversed, 462);
});
it('Should return 332 when 233 given', () => {
  const reversed = reverse(233);

  assert.equal(reversed, 332);
});
it('Should return 763 when -367 given', () => {
  const reversed = reverse(-367);

  assert.equal(reversed, 763);
});
it('Should return 25 when 520 given', () => {
  const reversed = reverse(520);

  assert.equal(reversed, 25);
});
it('Should return 822 when 228 given', () => {
  const reversed = reverse(228);

  assert.equal(reversed, 822);
});
it('Should return 231 when -132 given', () => {
  const reversed = reverse(-132);

  assert.equal(reversed, 231);
});
it('Should return 152 when -251 given', () => {
  const reversed = reverse(-251);

  assert.equal(reversed, 152);
});
it('Should return 561 when 165 given', () => {
  const reversed = reverse(165);

  assert.equal(reversed, 561);
});
it('Should return 524 when -425 given', () => {
  const reversed = reverse(-425);

  assert.equal(reversed, 524);
});
it('Should return 535 when 535 given', () => {
  const reversed = reverse(535);

  assert.equal(reversed, 535);
});
