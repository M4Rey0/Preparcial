interface FooterProps {
  rights: string;
}

export default function Footer({ rights }: FooterProps) {
  return (
    <footer className="bg-[#2E4053] px-4 py-5 text-center text-sm text-white">
      <p>{rights}</p>
    </footer>
  );
}
