import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CreditCard, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Navigation from '@/components/Navigation';

import { BrowserProvider, Contract, keccak256, toUtf8Bytes } from "ethers";

import IdentityABI from "../../DeSoc/artifacts/contracts/IdentityContract.sol/Identity.json";



import { registerIdentity } from "@/utils/contract";


declare global {
  interface Window {
    ethereum?: any;
  }
}

const Register = () => {
  const [formData, setFormData] = useState({
    aadhaar: '',
    voterId: '',
    mobile: ''
  });
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'success' | 'error'>('idle');

  

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setVerificationStatus('idle');
  };



const CONTRACT_ADDRESS = "0x1EE2D65c0B63C65aB40E11eEbB31CcBA29D17Cfa";

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  try {
    // ✅ Step 1: Check MetaMask
    if (!window.ethereum) {
      console.error("MetaMask not installed");
      return;
    }
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log("Connected account:", accounts[0]);

    // ✅ Step 2: Setup provider, signer, contract
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    console.log("Signer address:", address);

    const contract = new Contract(CONTRACT_ADDRESS, IdentityABI.abi, signer);
    console.log("Contract instance:", contract);

    // ✅ Step 3: Prepare values
    const name = "User Name"; // Replace with form input
    const aadhaarHash = keccak256(toUtf8Bytes("123456789012"));
    const panHash = keccak256(toUtf8Bytes("ABCDE1234F"));
    const drivingHash = keccak256(toUtf8Bytes("DL1234567890"));

    console.log("Sending data to smart contract:", { name, aadhaarHash, panHash, drivingHash });

    // ✅ Step 4: Send transaction
    const tx = await contract.registerIdentity(name, aadhaarHash, panHash, drivingHash);
    console.log("Transaction sent:", tx);

    await tx.wait();
    console.log("Transaction mined successfully:", tx.hash);
    console.log(`View on BscScan: https://testnet.bscscan.com/tx/${tx.hash}`);

    // ✅ Step 5: Read back from contract
    const storedIdentity = await contract.identities(address);
    console.log("Stored Identity on Blockchain:", storedIdentity);

  } catch (error) {
    console.error("Error during contract interaction:", error);
  }
}

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Secure Verification Process</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-foreground mb-4">
              Verify Your <span className="text-accent">Registration</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Link your Aadhaar and Voter ID for secure blockchain-based verification
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins text-foreground flex items-center space-x-3">
                    <CreditCard className="h-6 w-6 text-accent" />
                    <span>Identity Verification</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Aadhaar Input */}
                    <div className="space-y-2">
                      <Label htmlFor="aadhaar" className="text-foreground font-medium">
                        Aadhaar Number
                      </Label>
                      <div className="relative">
                        <Input
                          id="aadhaar"
                          type="text"
                          placeholder="XXXX XXXX XXXX"
                          value={formData.aadhaar}
                          onChange={(e) => handleInputChange('aadhaar', e.target.value)}
                          className="glass border-white/30 focus:border-accent/50 text-foreground placeholder:text-muted-foreground"
                          maxLength={14}
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <Shield className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Your Aadhaar number is encrypted and never stored in plain text
                      </p>
                    </div>

                    {/* Voter ID Input */}
                    <div className="space-y-2">
                      <Label htmlFor="voterId" className="text-foreground font-medium">
                        Voter ID Number
                      </Label>
                      <div className="relative">
                        <Input
                          id="voterId"
                          type="text"
                          placeholder="ABC1234567"
                          value={formData.voterId}
                          onChange={(e) => handleInputChange('voterId', e.target.value)}
                          className="glass border-white/30 focus:border-accent/50 text-foreground placeholder:text-muted-foreground"
                          maxLength={10}
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Mobile Input */}
                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="text-foreground font-medium">
                        Mobile Number
                      </Label>
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                        className="glass border-white/30 focus:border-accent/50 text-foreground placeholder:text-muted-foreground"
                      />
                      <p className="text-xs text-muted-foreground">
                        For OTP verification and status updates
                      </p>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isVerifying || !formData.aadhaar || !formData.voterId}
                      className="w-full btn-saffron text-lg py-3"
                    >
                      {isVerifying ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        'Verify Registration'
                      )}
                    </Button>
                  </form>

                  {/* Status Messages */}
                  {verificationStatus === 'success' && (
                    <div className="glass p-4 rounded-xl border-l-4 border-primary bg-primary/5">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium text-foreground">Verification Successful!</h4>
                          <p className="text-sm text-muted-foreground">Your voter registration is confirmed and secured on the blockchain.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {verificationStatus === 'error' && (
                    <div className="glass p-4 rounded-xl border-l-4 border-destructive bg-destructive/5">
                      <div className="flex items-center space-x-3">
                        <AlertCircle className="h-5 w-5 text-destructive" />
                        <div>
                          <h4 className="font-medium text-foreground">Verification Failed</h4>
                          <p className="text-sm text-muted-foreground">Please check your details and try again.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Security Info */}
              <Card className="glass-card border-white/20">
                <CardHeader>
                  <CardTitle className="text-lg font-poppins text-foreground">
                    Security Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">End-to-End Encryption</h4>
                      <p className="text-sm text-muted-foreground">All data is encrypted using military-grade security</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Zero-Knowledge Proofs</h4>
                      <p className="text-sm text-muted-foreground">Verify identity without revealing sensitive data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-lotus-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Blockchain Immutability</h4>
                      <p className="text-sm text-muted-foreground">Records cannot be altered or tampered with</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Process Steps */}
              <Card className="glass-card border-white/20">
                <CardHeader>
                  <CardTitle className="text-lg font-poppins text-foreground">
                    Verification Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">1</div>
                      <span className="text-sm text-foreground">Enter your credentials</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">2</div>
                      <span className="text-sm text-foreground">System verifies with government databases</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-lotus-gold/20 text-lotus-gold text-xs font-bold flex items-center justify-center">3</div>
                      <span className="text-sm text-foreground">Record secured on blockchain</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-chakra-blue/20 text-chakra-blue text-xs font-bold flex items-center justify-center">4</div>
                      <span className="text-sm text-foreground">Receive confirmation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;