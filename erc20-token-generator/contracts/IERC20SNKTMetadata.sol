// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20SNKT.sol";

/**
@dev Interface for the optional metadata functions from the ERC20 standard.
*/
interface IERC20SNKTMetadata is IERC20SNKT {
  /** 
  @dev Returns the name of the token
  */
  function name() external view returns (string memory);

  /** 
  @dev Return the symbol of the token.
  */
  function symbol() external view returns (string memory);

  /** 
  @dev Return the decimal place of the token.
  */
  function decimals() external view returns (uint8);
}