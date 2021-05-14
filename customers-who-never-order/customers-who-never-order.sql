# Write your MySQL query statement below
SELECT name AS Customers from customers LEFT JOIN orders ON customers.id=orders.customerid WHERE orders.customerid IS null;