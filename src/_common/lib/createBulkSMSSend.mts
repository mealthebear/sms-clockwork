import { createMessageRecord } from '../../../database/tables/messages/createMessageRecord.mjs';
import pkg from "twilio";
const { Twilio } = pkg;

type PhoneNumber = `+1${string}`;
type BodyText = string;
type RecipientData = { phoneNumber: PhoneNumber; bodyText: BodyText };
type TenantList = RecipientData[];

const createSMSPromise = (
  recipientPhoneNumber: PhoneNumber,
  bodyText: string
): Promise<unknown> => {
  const SMSPromise = new Promise(async (resolve, reject) => {
    const TWILIO_SID = process.env.TWILIO_SID;
    const TWILIO_TOKEN = process.env.TWILIO_TOKEN;
    const SENDER_PHONE_NUMBER = process.env.SENDER_PHONE_NUMBER;

    const client = new Twilio(TWILIO_SID, TWILIO_TOKEN);

    const messageDetails = {
      phoneNumber: recipientPhoneNumber,
      bodyText: bodyText,
    };
    try {
      const message = await client.messages.create({
        from: `${SENDER_PHONE_NUMBER}`,
        to: `${recipientPhoneNumber}`,
        body: `${bodyText}`,
      });
      createMessageRecord(messageDetails, true);
      resolve(message);
    } catch (err) {
      createMessageRecord(messageDetails, false);
      reject(err);
    }
  });
  return SMSPromise;
};

export const createSMSPromiseList = (
  tenantList: TenantList
): Promise<unknown>[] => {
  const SMSPromiseList: Promise<unknown>[] = [];
  for (let index = 0; index < tenantList.length; index++) {
    const recipientPhoneNumber = tenantList[index].phoneNumber;
    const bodyText = tenantList[index].bodyText;

    const SMSPromise = createSMSPromise(recipientPhoneNumber, bodyText);
    SMSPromiseList.push(SMSPromise);
  }
  return SMSPromiseList;
};

export default { createSMSPromiseList };
