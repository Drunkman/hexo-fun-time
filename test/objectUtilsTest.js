var {getObjectValues} = require('../lib/objectUtils');

var obj = {a: {b: {c: {d: 'foo'}}}};
console.log(getObjectValues(obj, "a.b.c.d"));
// ['foo']

obj = [{a: {b: {c: {d: 'foo'}}}}];
console.log(getObjectValues(obj, "[].a.b.c.d"));
// ['foo']

obj = [{a: {b: {c: {d: ['foo']}}}}];
console.log(getObjectValues(obj, "a.b.c.d.[]"));
// ['foo']

obj = [{a: {b: {c: {d: [['foo']]}}}}];
console.log(getObjectValues(obj, "a.b.c.d.[].[]"));
// ['foo']

obj = {
  code: 1,
  data: [
    {
      content: "string1",
      updateTime: "2018-06-20 13:35:09"
    },
    {
      content: "string2",
      updateTime: "2017-12-07 09:52:42"
    }
  ]
};
console.log(getObjectValues(obj, "data.[].content"));
// ['string1', 'string2']

obj = {
  code: 1,
  data: [[[['string1', 'string2']]]]
};
console.log(getObjectValues(obj, "data.[].[].[].[]"));
// ['string1', 'string2']

obj = [[[['string1', 'string2'], ['string3', 'string4'], ['string5']]]];
console.log(getObjectValues(obj, "[].[].[].[]"));
// ['string1', 'string2', 'string3', 'string4', 'string5']

obj = {
  code: 1,
  data: [[[['string1', 'string2'], ['string3', 'string4'], ['string5']]]]
};
console.log(getObjectValues(obj, "data.[].[].[].[]"));
// ['string1', 'string2', 'string3', 'string4', 'string5']