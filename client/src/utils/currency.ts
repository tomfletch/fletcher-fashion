export function formatCurrency(currency: number): string {
  return `£${currency.toFixed(2)}`;
}

export function formatIntCurrency(currency: number): string {
  return `£${currency.toFixed(0)}`;
}