import { Lusitana, Montserrat } from 'next/font/google'; //Esta es la manera de importar cualquier fuente de google
// aca abajo la exportamos y se importa en el layout
export const montserrat = Montserrat({ subsets: ['latin'], weight: '400' })

export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] })