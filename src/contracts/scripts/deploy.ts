/**
 * Deployment script — STUB ONLY.
 *
 * Real deployment is blocked until:
 *   1. Risk Acceptance signed (PRD v0.2 §11.3).
 *   2. Legal opinion on token classification (Group 1 vs Group 2) returned.
 *   3. Smart-contract audit complete (Hacken / Certik / Beosin — per agent spec).
 *   4. Multi-sig (Gnosis Safe) configured as deployer / admin.
 *
 * Until then, this script intentionally throws on invocation to prevent accidental deploys.
 */

async function main(): Promise<void> {
  throw new Error(
    '[deploy.ts] Deployment is blocked. See header comment — Risk Acceptance + legal opinion + audit pending.',
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
