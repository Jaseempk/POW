import { NextResponse } from 'next/server';
import { create } from 'ipfs-http-client';

const ipfs = create({ url: 'https://ipfs.infura.io:5001/api/v0' });

export async function POST(req: Request) {
  try {
    const { file, metadata } = await req.json();
    
    // Upload to IPFS
    const result = await ipfs.add(file);
    
    // Store metadata and IPFS hash in database
    
    return NextResponse.json({ 
      success: true, 
      ipfsHash: result.path 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Document upload failed' }, 
      { status: 500 }
    );
  }
}