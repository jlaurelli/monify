from __future__ import unicode_literals

from django.db import models


class Investment(models.Model):
    # All U.S. money market fund ticker symbols are five letters long.
    symbol = models.CharField(unique=True, max_length=5)
    name = models.CharField(max_length=200)
    current_price = models.DecimalField(max_digits=6, decimal_places=2)

    def __unicode__(self):
        return self.name


class Portfolio(models.Model):
    investment = models.ForeignKey(Investment)

    def __unicode__(self):
        return str(self.investment)
