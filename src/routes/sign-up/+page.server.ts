import { handleLeadAction } from '#lib/server/lead-action.ts';
import type { Actions } from './$types';

export const actions = {
	default: (event) => handleLeadAction(event, 'sign-up')
} satisfies Actions;
