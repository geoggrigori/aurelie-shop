// Silhueta simples de frasco, usada como "imagem" do produto sobre o gradiente.
export function BottleMark() {
  return (
    <svg
      viewBox="0 0 64 96"
      className="h-28 w-28 text-white/85"
      fill="none"
      aria-hidden="true"
    >
      <rect x="26" y="6" width="12" height="12" rx="2" fill="currentColor" />
      <rect x="28" y="16" width="8" height="8" fill="currentColor" opacity="0.7" />
      <path
        d="M18 30c0-3 3-6 6-6h16c3 0 6 3 6 6v52c0 4-3 7-7 7H25c-4 0-7-3-7-7V30Z"
        fill="currentColor"
      />
      <rect x="24" y="48" width="16" height="20" rx="2" fill="white" opacity="0.25" />
    </svg>
  );
}
