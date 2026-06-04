// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IPaymaster
 * @notice Interface draft for ERC-4337 paymaster that sponsors gas for PlayID smart wallets.
 *
 * @dev SCAFFOLD ONLY — no implementation. Subset of ERC-4337 `IPaymaster` for documentation.
 *      Real impl MUST conform to canonical EntryPoint contract on KUB Chain
 *      (Bitkub Chain bundler/EntryPoint readiness pending — Crypto Researcher action item).
 *
 *      Sponsorship policy (per PRD v0.2 §4.1):
 *        - Sponsor gas only for wallet-creation, primary-purchase, and redemption tx.
 *        - Rate-limit per user wallet to prevent griefing.
 *        - Reject any operation with calldata that escalates privileges or transfers
 *          assets out of the smart wallet without explicit user signature.
 */
interface IPaymaster {
    enum PostOpMode {
        opSucceeded,
        opReverted,
        postOpReverted
    }

    /// @dev See ERC-4337 PackedUserOperation. Kept minimal here — full struct in impl.
    struct UserOpStub {
        address sender;
        uint256 nonce;
        bytes callData;
    }

    /// @notice Called by EntryPoint to validate paymaster will pay for the userOp.
    function validatePaymasterUserOp(
        UserOpStub calldata userOp,
        bytes32 userOpHash,
        uint256 maxCost
    ) external returns (bytes memory context, uint256 validationData);

    /// @notice Called by EntryPoint after the userOp is executed.
    function postOp(
        PostOpMode mode,
        bytes calldata context,
        uint256 actualGasCost
    ) external;

    // ---------------------------------------------------------------------
    // Admin
    // ---------------------------------------------------------------------

    function deposit() external payable;

    function withdrawTo(address payable to, uint256 amount) external;

    function setSponsorshipPolicy(bytes32 policyHash) external;
}
