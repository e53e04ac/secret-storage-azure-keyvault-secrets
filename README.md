# secret-storage-azure-keyvault-secrets

~~~~~ sh
npm install e53e04ac/secret-storage-azure-keyvault-secrets
~~~~~

~~~~~ mjs
import { SecretStorageAzureKeyvaultSecrets } from 'e53e04ac/secret-storage-azure-keyvault-secrets';
import { SecretStorage } from 'e53e04ac/secret-storage-azure-keyvault-secrets';
~~~~~

~~~~~ mermaid
graph LR;
  A(["secret-storage-azure-keyvault-secrets"]);
  B0(["@azure/identity"]);
  B1(["@azure/keyvault-secrets"]);
  B2(["e53e04ac/base"]);
  B3(["e53e04ac/hold"]);
  B4(["e53e04ac/secret-storage"]);
  C0(["@types/node"]);
  click B2 href "https://github.com/e53e04ac/base";
  click B3 href "https://github.com/e53e04ac/hold";
  click B4 href "https://github.com/e53e04ac/secret-storage";
  subgraph "e53e04ac/secret-storage-azure-keyvault-secrets";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
    B4 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
  end;
~~~~~
