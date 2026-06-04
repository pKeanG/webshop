// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IGameItem1155
 * @notice Interface draft for per-game ERC-1155 collectible items with EIP-2981 royalty.
 *
 * @dev SCAFFOLD ONLY — no implementation. Real implementation depends on legal
 *      opinion (see PRD v0.2 §4.2 and §11.2 R2) on token classification (Group 1 vs Group 2).
 *      In-game items are intended to be redemption coupons for the Layer 1 wrapper token
 *      (see {IWrapperToken}). Royalty per EIP-2981 enforced on secondary trades.
 *
 *      Per-game contracts are deployed by a Factory pattern, one contract per pilot title
 *      (MapleStory, Yulgang). UUPS upgradeability TBD pending audit posture.
 */
interface IGameItem1155 {
    // ---------------------------------------------------------------------
    // Events
    // ---------------------------------------------------------------------

    event ItemTypeRegistered(uint256 indexed id, string metadataURI, uint96 royaltyBps);
    event ItemMinted(address indexed to, uint256 indexed id, uint256 amount, bytes32 indexed orderId);
    event ItemBurned(address indexed from, uint256 indexed id, uint256 amount, bytes32 reason);
    event RoyaltyUpdated(uint256 indexed id, address receiver, uint96 bps);

    // ---------------------------------------------------------------------
    // Admin / Publisher actions
    // ---------------------------------------------------------------------

    /// @notice Register a new item type (called by game publisher with PUBLISHER_ROLE).
    function registerItemType(
        uint256 id,
        string calldata metadataURI,
        uint96 royaltyBps,
        address royaltyReceiver
    ) external;

    /// @notice Mint items to a user (called by Shop module after primary purchase confirmation).
    function mintTo(
        address to,
        uint256 id,
        uint256 amount,
        bytes32 orderId
    ) external;

    /// @notice Burn items (used when user redeems for in-game consumption or via the wrapper token).
    function burnFrom(
        address from,
        uint256 id,
        uint256 amount,
        bytes32 reason
    ) external;

    // ---------------------------------------------------------------------
    // EIP-2981 royalty
    // ---------------------------------------------------------------------

    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        external
        view
        returns (address receiver, uint256 royaltyAmount);
}
