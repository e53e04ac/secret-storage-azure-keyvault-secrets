# secret-storage-azure-keyvault-secrets

~~~~~ sh
npm install e53e04ac/secret-storage-azure-keyvault-secrets
~~~~~

~~~~~ mjs
import { SecretStorageAzureKeyvaultSecrets } from 'e53e04ac/secret-storage-azure-keyvault-secrets';
import { SecretStorage } from 'e53e04ac/secret-storage-azure-keyvault-secrets';
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/secret-storage-azure-keyvault-secrets"]);
  subgraph "dependencies";
    B_0(["@azure/identity"]);
    B_1(["@azure/keyvault-secrets"]);
    B_2(["e53e04ac/base"]);
    B_3(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/node"]);
    B_5(["e53e04ac/secret-storage"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  click B_0 "https://www.npmjs.org/package/@azure/identity/v/3.1.3";
  click B_1 "https://www.npmjs.org/package/@azure/keyvault-secrets/v/4.6.0";
  click B_2 "https://github.com/e53e04ac/base/tree/b4e091dbfeba0ea30c870ac7ac7877582e3fd4f0";
  click B_3 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_5 "https://github.com/e53e04ac/secret-storage/tree/e59ea9ea05d50d9940c5477c7d04106a73a37fa4";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/secret-storage-azure-keyvault-secrets"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "@azure/identity"
    D0(["DefaultAzureCredential"]);
  end;
  subgraph "@azure/keyvault-secrets"
    D1(["SecretClient"]);
  end;
  subgraph "base"
    D2(["Base"]);
  end;
  subgraph "hold"
    D3(["hold"]);
    D4(["unwrap"]);
    D5(["Get"]);
    D6(["ValueOrGet"]);
  end;
  subgraph "secret-storage"
    D7(["SecretStorage"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D1 --import--> C1;
  D2 --import--> C1;
  D5 --import--> C1;
  D6 --import--> C1;
  D7 --import--> C1;
~~~~~
