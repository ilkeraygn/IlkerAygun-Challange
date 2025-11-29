import { Transaction } from "@mysten/sui/transactions";

export const transferHero = (heroId: string, to: string) => {
  const tx = new Transaction();

  tx.transferObjects(
    [tx.object(heroId)], // gönderilecek objeler
    to                   // alıcı adres
  );

  
  // TODO: Transfer hero to another address
  // Use tx.transferObjects() method
  // Arguments: heroId (object), to (address)
    // Hints:
    // Use tx.object() for object IDs
    // Use "to" for the address
    // This is a simple object transfer, not a moveCall
  
  return tx;
};