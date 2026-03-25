'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Footer() {
  return (
    <motion.footer
      className="border-border bg-background w-full border-t"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        <motion.div
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
          variants={footerVariants}
        >
          {/* Brand */}
          <motion.div variants={sectionVariants}>
            <h2 className="text-xl font-semibold">Arctic Accessories</h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Premium thermal gear built for extreme conditions. Stay warm, stay
              ready.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={sectionVariants}>
            <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Shop</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div variants={sectionVariants}>
            <h3 className="mb-3 text-sm font-semibold">Categories</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="#">Jackets</Link>
              </li>
              <li>
                <Link href="#">Boots</Link>
              </li>
              <li>
                <Link href="#">Gloves</Link>
              </li>
              <li>
                <Link href="#">Accessories</Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={sectionVariants}>
            <h3 className="mb-3 text-sm font-semibold">Subscribe</h3>
            <p className="text-muted-foreground mb-3 text-sm">
              Get updates on new products and offers.
            </p>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="border-border focus:ring-primary w-full rounded-lg border bg-transparent px-3 py-2 text-sm outline-none focus:ring-2"
              />
              <button className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm hover:opacity-90">
                Join
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="border-border text-muted-foreground mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm md:flex-row"
          variants={sectionVariants}
        >
          <p>© {new Date().getFullYear()} Arctic Store. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
