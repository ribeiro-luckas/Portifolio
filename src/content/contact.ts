/** Public contact channels. Add only destinations approved for publication. */
export const contact = {
  email: "luckas.ribeiro04@gmail.com",
  whatsappNumber: "5581983604314" as string | null,
  whatsappMessage:
    "Olá, Luckas! Gostei de seu portfólio e gostaria de conversar.",
  professionalLinks: [] as readonly { label: string; href: string }[],
} as const;

export const emailHref = `mailto:${contact.email}`;

export const whatsappHref =
  contact.whatsappNumber && /^[1-9]\d{9,14}$/.test(contact.whatsappNumber)
    ? `https://wa.me/${contact.whatsappNumber}${contact.whatsappMessage ? `?text=${encodeURIComponent(contact.whatsappMessage)}` : ""}`
    : null;
