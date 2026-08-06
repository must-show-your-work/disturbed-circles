{
  description = "disturbed-circles — personal/project blog (Zola + Svelte)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = { self, nixpkgs, flake-parts, ... } @ inputs:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" "aarch64-darwin" "aarch64-linux" "x86_64-darwin" ];

      perSystem = { config, pkgs, system, ... }: {
        devShells.default = pkgs.mkShell {
          name = "disturbed-circles";
          packages = [
            pkgs.zola
            pkgs.nodejs_22
            pkgs.pnpm
            pkgs.just
            pkgs.python3Packages.weasyprint  # résumé HTML -> static/resume.pdf
          ];
        };
      };
    };
}
