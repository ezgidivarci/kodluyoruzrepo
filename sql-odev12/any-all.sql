--film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?

SELECT COUNT (*) AS number_of_film FROM film
WHERE length > (
SELECT ROUND (AVG(length)) FROM film
);

--film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?

SELECT COUNT(*) FROM film
WHERE rental_rate = (
(SELECT MAX(rental_rate) FROM film)
);

--film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.

(SELECT * FROM film
WHERE rental_rate = (
SELECT MIN(rental_rate) FROM film
))
INTERSECT
(SELECT * FROM film
WHERE replacement_cost = (
SELECT MIN(replacement_cost) FROM film
));

--payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.
WITH alisverissayilari(customer_id, sayi) AS (select customer_id, COUNT(amount) from payment
group by customer_id),

maxalisveris(maxsayi) AS (select max(sayi) from alisverissayilari)

select c.*
from alisverissayilari a, maxalisveris m, customer c
where a.sayi=m.maxsayi and c.customer_id=a.customer_id