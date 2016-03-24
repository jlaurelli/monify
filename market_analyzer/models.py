from __future__ import unicode_literals

from django.db import models


class Stock(models.Model):
    # All U.S. money market fund ticker symbols are five letters long.
    symbol = models.CharField(unique=True, max_length=5)
    name = models.CharField(max_length=200)

    def __unicode__(self):
        return self.name


class StockPrice(models.Model):
    ts = models.DateTimeField(db_index=True)
    stock = models.ForeignKey(Stock, related_name="prices")
    price = models.DecimalField(max_digits=20, decimal_places=6)


class Investment(models.Model):
    stock = models.ForeignKey(Stock)
    shares = models.PositiveIntegerField(default=100)

    def __unicode__(self):
        return str(self.stock, self.shares)


class Portfolio(models.Model):
    investment = models.ForeignKey(Investment)

    def __unicode__(self):
        return str(self.investment)
