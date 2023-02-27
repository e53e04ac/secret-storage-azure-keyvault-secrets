# secret-storage-azure-keyvault-secrets

~~~~~ sh
npm install e53e04ac/secret-storage-azure-keyvault-secrets
~~~~~

~~~~~ mjs
import { SecretStorageAzureKeyvaultSecrets } from 'secret-storage-azure-keyvault-secrets';
import { SecretStorage } from 'secret-storage-azure-keyvault-secrets';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["@azure/identity"]);
    B_1(["@azure/keyvault-secrets"]);
    B_2(["event-emitter"]);
    B_3(["hold"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/node"]);
    B_5(["secret-storage"]);
  end;
  subgraph "github";
    C_2(["e53e04ac/event-emitter\n7e816a82855aca428d7cfe3b3600f54c0fef6c0c"]);
    C_3(["e53e04ac/hold\n511bb6663491dadc6e2760a04ee3750996d069f8"]);
    C_5(["e53e04ac/secret-storage\nedfa2d9f53642419ca6c1bbe6bcc7b478315182a"]);
  end;
  subgraph "npmjs";
    C_0(["@azure/identity\n3.1.3"]);
    C_1(["@azure/keyvault-secrets\n4.6.0"]);
    C_4(["@types/node\n18.14.2"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  click C_0 "https://www.npmjs.com/package/@azure/identity/v/3.1.3";
  click C_1 "https://www.npmjs.com/package/@azure/keyvault-secrets/v/4.6.0";
  click C_2 "https://github.com/e53e04ac/event-emitter/tree/7e816a82855aca428d7cfe3b3600f54c0fef6c0c";
  click C_3 "https://github.com/e53e04ac/hold/tree/511bb6663491dadc6e2760a04ee3750996d069f8";
  click C_4 "https://www.npmjs.com/package/@types/node/v/18.14.2";
  click C_5 "https://github.com/e53e04ac/secret-storage/tree/edfa2d9f53642419ca6c1bbe6bcc7b478315182a";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/secret-storage-azure-keyvault-secrets";
    E_0(["namespace SecretStorageAzureKeyvaultSecrets"]);
    E_1(["const SecretStorageAzureKeyvaultSecrets"]);
    E_2(["const SecretStorage"]);
  end;
  M["index.d.ts"]
  subgraph "@azure/keyvault-secrets";
    I_0_0(["SecretClient"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
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
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/secret-storage-azure-keyvault-secrets";
    E_0(["SecretStorageAzureKeyvaultSecrets"]);
    E_1(["SecretStorage"]);
  end;
  M["index.mjs"]
  subgraph "@azure/identity";
    I_0_0(["DefaultAzureCredential"]);
  end;
  subgraph "@azure/keyvault-secrets";
    I_1_0(["SecretClient"]);
  end;
  subgraph "event-emitter";
    I_2_0(["EventEmitter"]);
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
