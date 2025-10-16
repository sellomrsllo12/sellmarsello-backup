export function compactFormat(value: number) {
  const formatter = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
  });

  return formatter.format(value);
}

export function standardFormat(value: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function compactFormatRupiah(value: number) {
  const formatter = new Intl.NumberFormat("id-ID", {
    notation: "compact",
    compactDisplay: "short",
    // PENTING: Menetapkan style dan currency secara eksplisit
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Hindari Rp1.50 Jt
    maximumFractionDigits: 1, 
  });

  return formatter.format(value);
}

export function standardFormatRupiah(value: number) {
  return value.toLocaleString("id-ID", {
    // PENTING: Menetapkan style dan currency secara eksplisit
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}