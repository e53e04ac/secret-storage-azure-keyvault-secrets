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
  A(["package.json"]);
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
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  click B_0 "https://www.npmjs.org/package/@azure/identity/v/3.1.3";
  click B_1 "https://www.npmjs.org/package/@azure/keyvault-secrets/v/4.6.0";
  click B_2 "https://github.com/e53e04ac/base/tree/ec922e97d594333727b64f0f4754321480a59c3c";
  click B_3 "https://github.com/e53e04ac/hold/tree/5dd6f94b8ecd94f98219a7afae52320676380c27";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_5 "https://github.com/e53e04ac/secret-storage/tree/d265ae1090a2cf5d52b3210d1cea700edf1f3a1d";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/secret-storage-azure-keyvault-secrets";
    E_0(["SecretStorageAzureKeyvaultSecrets"]);
    E_1(["SecretStorage"]);
  end;
  M(["index.mjs"])
  subgraph "@azure/identity";
    I_0_0(["DefaultAzureCredential"]);
  end;
  subgraph "@azure/keyvault-secrets";
    I_1_0(["SecretClient"]);
  end;
  subgraph "base";
    I_2_0(["Base"]);
  end;
  subgraph "hold";
    I_3_0(["hold"]);
    I_3_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_3_1;
  E_0 ----> M;
  E_1 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/secret-storage-azure-keyvault-secrets";
    E_0(["const SecretStorageAzureKeyvaultSecrets"]);
    E_1(["const SecretStorage"]);
  end;
  M(["index.d.ts"])
  subgraph "@azure/keyvault-secrets";
    I_0_0(["SecretClient"]);
  end;
  subgraph "base";
    I_1_0(["Base"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
    I_2_1(["ValueOrGet"]);
  end;
  subgraph "secret-storage";
    I_3_0(["SecretStorage"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  M ----> I_3_0;
  E_0 ----> M;
  E_1 ----> M;
~~~~~
