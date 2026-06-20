/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
/**
 * @file AuthPage.tsx
 * @description Dedicated web authentication bridge.
 * Authenticates users against Firebase using a Google OAuth Popup.
 * Upon successful authentication, it redirects back to the local Electron app 
 * via a registered custom URI scheme (`aurora://auth?token=XYZ`), ensuring 
 * seamless cross-platform credential handoff.
 */
import { motion } from 'framer-motion';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function AuthPage() {
  const [status, setStatus] = useState('waiting');
  const [errorMsg, setErrorMsg] = useState('');

  const handleGoogleAuth = async () => {
    setStatus('authenticating');
    try {
      if (!auth || !googleProvider) {
        throw new Error("Firebase Authentication is not configured. Missing API keys.");
      }
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential && credential.idToken) {
        setStatus('redirecting');
        window.location.href = `http://127.0.0.1:43210/auth?token=${credential.idToken}`;
        
        // Save token for manual fallback
        (window as any).__fallbackToken = credential.idToken;
      } else {
        throw new Error("Nebyl získán platný token od Googlu.");
      }
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMsg(error.message || "Přihlášení selhalo.");
    }
  };

  useEffect(() => {

  }, []);

  return (
    <div className="min-h-screen bg-[#0B0A15] flex flex-col items-center justify-center p-4 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="ambient-blob-1 opacity-60 mix-blend-screen" style={{ top: '-20%', left: '-10%', width: '50%', height: '50%' }} />
        <div className="ambient-blob-2 opacity-50 mix-blend-screen" style={{ top: 'auto', bottom: '-20%', left: 'auto', right: '-10%', width: '60%', height: '60%' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-md w-full bg-focus-bg border-2 border-focus-primary/30 rounded-2xl p-8 text-center z-10 shadow-[0_0_40px_rgba(139,92,246,0.1)]"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-focus-primary to-focus-secondary shadow-glow-primary" />
          <span className="text-3xl font-bold tracking-tight text-white">aurora</span>
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">Login with Google</h1>
        <p className="text-gray-400 mb-8 text-sm">
          Please authenticate to continue to the Aurora desktop application.
        </p>

        {status === 'waiting' && (
          <motion.button
            onClick={handleGoogleAuth}
            className="pressable w-full bg-white hover:bg-gray-200 text-black font-bold py-4 px-6 rounded-xl flex justify-center items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-primary focus-visible:ring-offset-2 focus-visible:ring-offset-focus-bg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </motion.button>
        )}

        {status === 'authenticating' && (
          <div className="text-gray-300 py-4 flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-[#8B5CF6]/30 border-t-[#8B5CF6] rounded-full animate-spin mb-4" />
            <p>Waiting for Google...</p>
          </div>
        )}

        {status === 'redirecting' && (
          <div className="text-green-400 py-4">
            <p className="font-bold mb-2">Authentication successful!</p>
            <p className="text-sm">Redirecting you back to the app...</p>
            <p className="text-xs text-gray-500 mt-4 mb-2">If nothing happens automatically:</p>
            <button 
              onClick={() => {
                const token = (window as any).__fallbackToken;
                if (token) window.location.href = `aurora://auth?token=${token}`;
              }}
              className="pressable text-xs bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg mb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-primary focus-visible:ring-offset-2 focus-visible:ring-offset-focus-bg"
            >
              Open Aurora App Manually
            </button>
            <p className="text-xs text-gray-600 mt-2"><a href="#" onClick={() => window.location.reload()} className="underline hover:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-primary focus-visible:ring-offset-2 focus-visible:ring-offset-focus-bg rounded-sm">Restart login</a></p>
          </div>
        )}

        {status === 'error' && (
          <div className="text-red-400 py-4 bg-red-500/10 rounded-xl border border-red-500/20">
            <p className="font-bold text-sm mb-1">Authentication Failed</p>
            <p className="text-xs">{errorMsg}</p>
            <button 
              onClick={() => setStatus('waiting')}
              className="mt-4 text-xs underline hover:text-white transition-transform duration-150 active:scale-[0.97] ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-primary focus-visible:ring-offset-2 focus-visible:ring-offset-focus-bg rounded-sm"
            >
              Try again
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
