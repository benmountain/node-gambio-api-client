import emailFixture from './../../tools/tests/fixtures/email.json';

const attachmentPath = `${__dirname}/../../tools/tests/fixtures/image.png`;
const attachmentName = 'hey.png';

const invoker = client => client.emails
  .queue(emailFixture)
  .then(email => client.emails.getById(email.id))
  .then(email => client.emails.sendById(email.id))
  .then(email => client.emails.delete(email.id))
  .then(() => client.emails.send(emailFixture))
  .then(() => client.emails.uploadAttachment(attachmentPath, attachmentName))
  .then(() => client);

export default invoker;
