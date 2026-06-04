// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IWrapperToken
 * @notice Interface draft for the Group 2 utility "wrapper" token (PRD v0.2 §4.2).
 *
 * @dev SCAFFOLD ONLY — no implementation. Token classification (Group 1 vs Group 2) MUST be
 *      finalized by Thai compliance counsel BEFORE this interface is implemented. SEC
 *      "substance over form" review (PRD v0.2 §11.2 R2) may force redesign of the token's
 *      multi-utility surface (governance, staking yield, cross-game utility) to stick as Group 2.
 *
 *      Mechanic (Layer 1 → Layer 2):
 *        1. User pays USDT → receives wrapper token (Layer 1, tradeable).
 *        2. User calls {redeemForItem} → wrapper token is burned, GameItem1155 is minted.
 *
 *      The redemption flow exists so the user purchase is treated as
 *      "digital-asset-for-digital-asset" exchange, not "digital asset as means of payment"
 *      (ทธ. 5/2565 — see PRD v0.2 §11.2 R1). Counsel opinion still required.
 */
interface IWrapperToken {
    // ---------------------------------------------------------------------
    // Events
    // ---------------------------------------------------------------------

    event WrapperMinted(address indexed to, uint256 amount, bytes32 indexed orderId);
    event WrapperRedeemed(address indexed user, uint256 amount, uint256 indexed gameItemId, uint256 itemAmount);

    // ---------------------------------------------------------------------
    // ERC-20-style surface (subset — full ERC-20 interface inherited in impl)
    // ---------------------------------------------------------------------

    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    // ---------------------------------------------------------------------
    // Wrapper-specific
    // ---------------------------------------------------------------------

    /// @notice Mint wrapper tokens to user (called by Shop module on USDT payment receipt).
    function mintWrapper(address to, uint256 amount, bytes32 orderId) external;

    /// @notice Burn `amount` of wrapper tokens and mint `itemAmount` of `gameItemId` to caller.
    /// @dev MUST verify a registered conversion rate (set by publisher) and that the
    ///      GameItem1155 contract is whitelisted as a redeemable target.
    function redeemForItem(uint256 gameItemId, uint256 amount) external;

    /// @notice The fixed/oracle-pegged price (in USDT, 6 decimals) for `amount` wrapper tokens.
    function quoteUsdtIn(uint256 amount) external view returns (uint256 usdtAmount);
}
