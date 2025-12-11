import { LucideIcon } from "lucide-react";
import { analytics } from "@/lib/analytics";
import { cn } from "@/lib/utils";

// WhatsApp Icon SVG
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={cn("h-5 w-5 fill-current", className)}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

interface HighConversionCTABannerProps {
  headline: string;
  subtext: string;
  buttonText: string;
  whatsappNumber: string;
  whatsappMessage: string;
  icon?: LucideIcon;
  source?: string;
  variant?: "default" | "compact";
}

const HighConversionCTABanner = ({
  headline,
  subtext,
  buttonText,
  whatsappNumber,
  whatsappMessage,
  icon: Icon,
  source = "blog_cta_banner",
  variant = "default",
}: HighConversionCTABannerProps) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleClick = () => {
    analytics.whatsappClick(source, whatsappNumber, whatsappMessage);
  };

  // Parse subtext to highlight price (text between ** **)
  const renderSubtext = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <span key={index} className="text-amber-300 font-bold">
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div
      className={cn(
        "bg-gradient-to-r from-[#005691] to-[#00a8e8] rounded-xl shadow-lg my-10",
        variant === "compact" ? "p-5 md:p-6" : "p-6 md:p-8"
      )}
    >
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        {Icon && (
          <div className="mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Icon className="h-10 w-10 text-white" />
            </div>
          </div>
        )}

        {/* Headline (H3 for SEO) */}
        <h3
          className={cn(
            "font-bold text-white leading-tight mb-3",
            variant === "compact" ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
          )}
        >
          {headline}
        </h3>

        {/* Subtext with price highlight */}
        <p
          className={cn(
            "text-white/90 mb-6 max-w-xl",
            variant === "compact" ? "text-base" : "text-lg"
          )}
        >
          {renderSubtext(subtext)}
        </p>

        {/* CTA Button - WhatsApp Green */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className={cn(
            "inline-flex items-center justify-center gap-2 font-bold rounded-lg",
            "bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all",
            "shadow-lg hover:shadow-xl transform hover:scale-105",
            "animate-heartbeat",
            variant === "compact"
              ? "px-6 py-3 text-base"
              : "px-8 py-4 text-lg"
          )}
        >
          <WhatsAppIcon className="h-5 w-5" />
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default HighConversionCTABanner;
