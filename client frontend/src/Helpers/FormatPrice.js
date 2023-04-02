const FormatPrice = ({ rupiah }) => {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(rupiah / 1);
};

export default FormatPrice;
