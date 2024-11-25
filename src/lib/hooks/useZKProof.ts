import { useState } from 'react';
import { generateProof, verifyProof } from 'zk-email';

export function useZKProof() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const generateEmailProof = async (email: string, emailContent: string) => {
    setIsGenerating(true);
    try {
      const proof = await generateProof(email, emailContent);
      return proof;
    } catch (error) {
      console.error('Error generating proof:', error);
      throw error;
    } finally {
      setIsGenerating(false);
    }
  };

  const verifyEmailProof = async (proof: any) => {
    setIsVerifying(true);
    try {
      const isValid = await verifyProof(proof);
      return isValid;
    } catch (error) {
      console.error('Error verifying proof:', error);
      throw error;
    } finally {
      setIsVerifying(false);
    }
  };

  return {
    generateEmailProof,
    verifyEmailProof,
    isGenerating,
    isVerifying,
  };
}