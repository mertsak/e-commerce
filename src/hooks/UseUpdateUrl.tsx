import { useRouter } from "next/navigation";

// URL'yi güncellemek için bir hook oluşturuyoruz

const useUpdateUrl = () => {
  const router = useRouter();

  const updateURL = (filters: Record<string, string>) => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== "all") params.set(key, value);
    });

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return updateURL;
};

export default useUpdateUrl;
