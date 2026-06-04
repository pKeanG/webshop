// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IMarketplace
 * @notice Interface draft for the secondary P2P marketplace (PRD v0.2 §4 + sitemap).
 *
 * @dev SCAFFOLD ONLY — no implementation. Pre-conditions for real impl:
 *      - Re-entrancy guard on every asset-transfer function (per agent spec).
 *      - EIP-2981 royalty enforced on every Buy / AcceptOffer.
 *      - Platform fee + royalty + seller proceeds clearly split and audit-logged.
 *      - Replay protection (nonce + deadline) on signed orders.
 *      - Pausable (admin) for incident response.
 */
interface IMarketplace {
    // ---------------------------------------------------------------------
    // Types
    // ---------------------------------------------------------------------

    struct Listing {
        address seller;
        address collection;     // ERC-1155 game item contract
        uint256 tokenId;
        uint256 amount;
        address payToken;       // USDT (KAP20) or wrapper token
        uint256 unitPrice;
        uint64 startTime;
        uint64 endTime;
        bool active;
    }

    struct Offer {
        address bidder;
        bytes32 listingId;
        address payToken;
        uint256 unitPrice;
        uint256 amount;
        uint64 expiry;
    }

    // ---------------------------------------------------------------------
    // Events
    // ---------------------------------------------------------------------

    event Listed(bytes32 indexed listingId, address indexed seller, address collection, uint256 tokenId);
    event ListingCancelled(bytes32 indexed listingId, address indexed seller);
    event Purchased(bytes32 indexed listingId, address indexed buyer, uint256 amount, uint256 totalPaid);
    event OfferMade(bytes32 indexed offerId, bytes32 indexed listingId, address indexed bidder);
    event OfferAccepted(bytes32 indexed offerId, address indexed seller, address indexed bidder);

    // ---------------------------------------------------------------------
    // Listings
    // ---------------------------------------------------------------------

    function list(
        address collection,
        uint256 tokenId,
        uint256 amount,
        address payToken,
        uint256 unitPrice,
        uint64 duration
    ) external returns (bytes32 listingId);

    function cancel(bytes32 listingId) external;

    function buy(bytes32 listingId, uint256 amount) external;

    // ---------------------------------------------------------------------
    // Offers
    // ---------------------------------------------------------------------

    function makeOffer(
        bytes32 listingId,
        address payToken,
        uint256 unitPrice,
        uint256 amount,
        uint64 expiry
    ) external returns (bytes32 offerId);

    function acceptOffer(bytes32 offerId) external;

    function withdrawOffer(bytes32 offerId) external;

    // ---------------------------------------------------------------------
    // Views
    // ---------------------------------------------------------------------

    function getListing(bytes32 listingId) external view returns (Listing memory);

    function platformFeeBps() external view returns (uint96);
}
