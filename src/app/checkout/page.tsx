"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { clearBasket } from "@/redux/productsSlice";
import { useDispatch } from "react-redux";

const Checkout = () => {
  const dispatch = useDispatch();

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


  // ödeme işlemi
  const handlePayment = () => {
    if (!cardNumber || !expiryDate || !cvv || !name) {
      setError("Please fill in all fields!");
      return;
    }

    // Sahte ödeme işlemi
    setTimeout(() => {
      // ödeme başarılı ise sepeti sıfırlarız
      dispatch(clearBasket());

      router.push("/success"); // Ödeme başarılı sayfasına yönlendir
    }, 1000);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Payment Information
          </Typography>

          {error && <Typography color="error">{error}</Typography>}

          {/* Card Name */}
          <TextField
            fullWidth
            label="Kart Üzerindeki İsim"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Card Number */}
          <TextField
            fullWidth
            label="Kart Numarası"
            margin="normal"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />

          <Box display="flex" gap={2}>
            {/* Card Date */}
            <TextField
              fullWidth
              label="Son Kullanma (MM/YY)"
              margin="normal"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />

            {/* Card CVV */}
            <TextField
              fullWidth
              label="CVV"
              margin="normal"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </Box>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handlePayment}
          >
            Ödemeyi Tamamla
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Checkout;
