import { TextHoverEffect, FooterBackgroundGradient } from './ui/TextHoverEffect'

const Footer = () => {
  return (
    <footer className="bg-[#0a0b10]/50 relative h-fit rounded-3xl overflow-hidden mx-4 md:mx-8 mb-4">
      {/* Text hover effect - Large brand text */}
      <div className="flex h-[20rem] md:h-[30rem] items-center justify-center">
        <TextHoverEffect text="ETERNAL" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default Footer
