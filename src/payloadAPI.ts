//This is is the make requests to and from the PayloadJS local API
import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from "@/payload.config";

export const payload = await getPayloadHMR({ config });
