/** Public contact channels. Add only destinations approved for publication. */
export const contact = {
  email: "luckas.ribeiro04@gmail.com",
  whatsappNumber: null as string | null,
  professionalLinks: [] as readonly { label: string; href: string }[],
} as const;

export const emailHref = `mailto:${contact.email}`;

export const whatsappHref =
  contact.whatsappNumber && /^[1-9]\d{9,14}$/.test(contact.whatsappNumber)
    ? `https://wa.me/${contact.whatsappNumber}`
    : null;
