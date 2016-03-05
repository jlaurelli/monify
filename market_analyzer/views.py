from django.shortcuts import render
from django.views.generic.base import TemplateView

from .models import Investment, Portfolio


class HomeView(TemplateView):
    template_name = "home.html"


class InvestmentView(TemplateView):
    model = Investment
    template_name = "investment.html"


class PortfolioView(TemplateView):
    model = Portfolio
    template_name = "portfolio.html"
