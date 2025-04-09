import { RootState } from "../store";

export const selectCurrentLocale = (state: RootState): string | undefined => state.app.locale