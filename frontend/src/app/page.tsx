import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { Header } from "@/components/ui/layouts/header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header></Header>
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Keep Your Car in <br /> Perfect Condition
          </h1>
          <p className="text-gray-600">
            Trusted maintenance, good recordkeeping, and future-proof protection. Manage everything from a single app.
          </p>
          <div className="flex gap-4">
            <Button className="flex items-center gap-2">
              <Download size={18} /> Google Play
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download size={18} /> App Store
            </Button>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <Image
            src="/car-app-mockup.png"
            alt="App preview"
            width={400}
            height={600}
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Everything You Need to Maintain Your Car
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Maintenance Reminders" },
            { title: "Service History" },
            { title: "Cost Tracking" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-white shadow hover:shadow-md transition-all"
            >
              <div className="text-blue-500 text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">
                Stay on top of car care with smart reminders, full history access, and detailed cost tracking.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Simple to Use, Easy to Maintain
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Download App", "Add Your Vehicle", "Set Reminders", "Track Everything"].map(
            (step, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full">
                  {index + 1}
                </div>
                <p className="font-medium">{step}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">
                “This app changed the way I take care of my car. Super intuitive and keeps me organized!”
              </p>
              <p className="mt-4 font-medium">User {i}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Start Managing Your Car Maintenance Today
        </h2>
        <p className="mb-8">
          Download AutoTrack app now and never miss a service again.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="secondary" className="flex items-center gap-2">
            <Download size={18} /> Google Play
          </Button>
          <Button variant="outline" className="text-white border-white flex items-center gap-2">
            <Download size={18} /> App Store
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold mb-2">AutoTrack.app</h3>
            <p className="text-sm text-gray-400">
              Your smart car maintenance assistant.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1 text-gray-400">
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Support</h4>
            <ul className="text-sm space-y-1 text-gray-400">
              <li>Help Center</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Follow Us</h4>
            <div className="flex gap-2">
              <div className="bg-gray-700 rounded-full p-2">🐦</div>
              <div className="bg-gray-700 rounded-full p-2">📘</div>
              <div className="bg-gray-700 rounded-full p-2">📸</div>
            </div>
          </div>
        </div>
        <p className="text-sm text-center mt-8 text-gray-500">
          © {new Date().getFullYear()} AutoTrack.app. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
