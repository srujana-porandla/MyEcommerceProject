package com.edubridge.onlinebookstore.dto;

import lombok.Data;

import java.util.Set;

import com.edubridge.onlinebookstore.entity.Address;
import com.edubridge.onlinebookstore.entity.Customer;
import com.edubridge.onlinebookstore.entity.Order;
import com.edubridge.onlinebookstore.entity.OrderItem;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}