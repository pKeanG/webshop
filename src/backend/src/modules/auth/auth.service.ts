import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly jwt: JwtService) {}

  /**
   * STUB — real impl will:
   *   1. Validate credentials against User table (bcrypt-hashed password) OR delegate to PlayID OAuth.
   *   2. Lookup or trigger smart-wallet creation (Privy / Web3Auth) — see WalletModule.
   *   3. Return access + refresh tokens.
   */
  async login(_email: string, _password: string): Promise<AuthTokens> {
    throw new UnauthorizedException('AuthService.login is not implemented (scaffold).');
  }

  async refresh(_refreshToken: string): Promise<AuthTokens> {
    throw new UnauthorizedException('AuthService.refresh is not implemented (scaffold).');
  }

  signAccessToken(userId: string): string {
    return this.jwt.sign({ sub: userId });
  }
}
