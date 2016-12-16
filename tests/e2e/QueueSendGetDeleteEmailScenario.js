import { email, image } from './../../tools/fixtures';

const attachmentPath = image;
const attachmentName = 'hey.png';

const invoker = client => client.emails
  .queue(email)
  .then(email => client.emails.getById(email.id))
  .then(email => client.emails.sendById(email.id))
  .then(email => client.emails.delete(email.id))
  .then(() => client.emails.send(email))
  .then(() => client.emails.uploadAttachment(attachmentPath, attachmentName))
  .then(() => client);

export default invoker;
