export const projectId = checkValue("20qpj0y0", "NEXT_PUBLIC_SANITY_PROJECT_ID")

export const dataset: string = checkValue("production", "NEXT_PUBLIC_SANITY_DATASET")

export const hookSecret = process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET

export const apiVersion = "2022-03-07"

// Validate env varaibles
function checkValue<T>(value: T | undefined, errorMsg: string): T {
  if (value === undefined) {
    throw new Error(`Missing Environment Variable: ${errorMsg}`)
  }
  return value
}
