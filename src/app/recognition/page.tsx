"use client";

import { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RecognitionPage() {
  const webcamRef = useRef<Webcam>(null);
  const [mirrored, setMirrored] = useState<boolean>(true);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recognizedSign, setRecognizedSign] = useState<string | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user",
  };

  const handleCapture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);

      // Simulate recognition (this would be replaced with actual ML backend call)
      setTimeout(() => {
        const signs = [
          "Hello",
          "Thank you",
          "Yes",
          "No",
          "Help",
          "Please",
          "Sorry",
        ];
        const randomSign = signs[Math.floor(Math.random() * signs.length)];
        setRecognizedSign(randomSign);
      }, 1500);
    }
  }, [webcamRef]);

  const toggleMirror = () => {
    setMirrored(!mirrored);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Start recording simulation
      setRecognizedSign(null);
    } else {
      // Stop recording simulation
      const signs = [
        "Hello",
        "Thank you",
        "Yes",
        "No",
        "Help",
        "Please",
        "Sorry",
      ];
      const randomSign = signs[Math.floor(Math.random() * signs.length)];
      setRecognizedSign(randomSign);
    }
  };

  const resetCapture = () => {
    setCapturedImage(null);
    setRecognizedSign(null);
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-6xl">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Sign Language Recognition
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Use your camera to practice and recognize sign language gestures. Our
          AI will analyze your signs in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <CardHeader className="bg-neutral-50 dark:bg-neutral-800">
              <CardTitle>Camera View</CardTitle>
              <CardDescription>
                Position your hands clearly in the frame for best results
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 bg-black flex items-center justify-center">
              {capturedImage ? (
                <div className="relative w-full h-[480px]">
                  <img
                    src={capturedImage}
                    alt="Captured sign"
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                  mirrored={mirrored}
                  className="w-full h-[480px] object-contain"
                />
              )}
            </CardContent>
            <div className="p-4 flex flex-wrap gap-3 justify-center bg-neutral-50 dark:bg-neutral-800">
              {capturedImage ? (
                <Button onClick={resetCapture} variant="outline">
                  Reset Camera
                </Button>
              ) : (
                <>
                  <Button onClick={handleCapture} variant="default">
                    Capture Sign
                  </Button>
                  <Button
                    onClick={toggleRecording}
                    variant={isRecording ? "destructive" : "outline"}
                  >
                    {isRecording ? "Stop Recording" : "Start Recording"}
                  </Button>
                  <Button onClick={toggleMirror} variant="outline">
                    {mirrored ? "Unmirror Camera" : "Mirror Camera"}
                  </Button>
                </>
              )}
            </div>
          </Card>
        </div>

        <div>
          <Tabs defaultValue="recognition" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="recognition">Recognition</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <TabsContent value="recognition" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recognition Results</CardTitle>
                  <CardDescription>
                    Our AI-powered system will identify your sign language
                    gestures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {recognizedSign ? (
                    <div className="text-center py-8">
                      <div className="text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                        {recognizedSign}
                      </div>
                      <p className="text-muted-foreground">
                        Sign recognized with high confidence
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-12 px-4">
                      <div className="rounded-full w-16 h-16 bg-neutral-100 dark:bg-neutral-800 mx-auto flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-muted-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                      </div>
                      <p className="text-muted-foreground">
                        Capture a sign or start recording to see the recognition
                        results
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="history" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recognition History</CardTitle>
                  <CardDescription>
                    Your recent sign language practice sessions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* This would be populated with actual history data */}
                    <div className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Hello</p>
                        <p className="text-sm text-muted-foreground">
                          Today, 10:30 AM
                        </p>
                      </div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        98% accuracy
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Thank you</p>
                        <p className="text-sm text-muted-foreground">
                          Today, 10:28 AM
                        </p>
                      </div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        95% accuracy
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Please</p>
                        <p className="text-sm text-muted-foreground">
                          Today, 10:25 AM
                        </p>
                      </div>
                      <div className="text-sm text-yellow-600 dark:text-yellow-400">
                        85% accuracy
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Help</p>
                        <p className="text-sm text-muted-foreground">
                          Today, 10:20 AM
                        </p>
                      </div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        92% accuracy
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Tips for Better Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5">
                <li>Ensure good lighting on your hands</li>
                <li>Position your hands in the center of the frame</li>
                <li>Make clear, deliberate movements</li>
                <li>Keep a neutral background if possible</li>
                <li>Try different angles if recognition fails</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
