import { Transaction } from "@mysten/sui/transactions";

export const delist = (
  packageId: string,
  listHeroId: string,
  adminCapId: string,
) => {
  const tx = new Transaction();

  tx.moveCall({
    target: `${packageId}::marketplace::delist`,
    typeArguments: [],
    arguments: [tx.object(adminCapId), tx.object(listHeroId)],
  });

  // TODO: Add moveCall to delist a hero (Admin only)
  // Function: `${packageId}::marketplace::delist`
  // Arguments: adminCapId (object), listHeroId (object)
    // Hints:
    // Use tx.object() for both objects
    // This requires admin capability verification
    // Returns the hero to the original seller

  return tx;
};
