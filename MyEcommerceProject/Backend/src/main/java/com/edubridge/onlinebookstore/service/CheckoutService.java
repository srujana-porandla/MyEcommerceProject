package com.edubridge.onlinebookstore.service;

import com.edubridge.onlinebookstore.dto.Purchase;
import com.edubridge.onlinebookstore.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}