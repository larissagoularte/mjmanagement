# Generated by Django 5.0.6 on 2024-05-21 20:22

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Anuncio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=20)),
                ('descricao', models.TextField()),
                ('renda', models.IntegerField()),
                ('tipologia', models.CharField(max_length=4)),
                ('localidade', models.CharField(max_length=20)),
                ('cidade', models.CharField(max_length=20)),
                ('status', models.CharField(choices=[('Disponível', 'Disponivel'), ('Indisponível', 'Indisponivel')], default='Disponível', max_length=12)),
                ('publicado', models.BooleanField(default=False)),
                ('data_entrada', models.DateField(blank=True, null=True)),
                ('area', models.CharField(blank=True, max_length=5, null=True)),
                ('certificado_energetico', models.CharField(blank=True, choices=[('A', 'A'), ('B', 'B'), ('C', 'C'), ('D', 'D'), ('E', 'E'), ('F', 'F')], max_length=10, null=True)),
                ('animais_domesticos', models.CharField(blank=True, choices=[('Gato', 'Gato'), ('Cão', 'Cao'), ('Não permitido', 'Nao Permitido')], max_length=13, null=True)),
                ('casas_banho', models.IntegerField(blank=True, null=True)),
                ('condicao_uso', models.CharField(blank=True, choices=[('Novo', 'Novo'), ('Usado', 'Usado')], max_length=10, null=True)),
                ('tipo_imovel', models.CharField(blank=True, choices=[('Apartmento', 'Apartamento'), ('Casa', 'Casa'), ('Quarto', 'Quarto'), ('Quinta', 'Quinta')], max_length=10, null=True)),
                ('caucao', models.IntegerField(blank=True, null=True)),
                ('fiador', models.BooleanField(blank=True, null=True)),
                ('prazo_contrato', models.CharField(blank=True, max_length=20, null=True)),
                ('garagem', models.BooleanField(blank=True, null=True)),
                ('estacionamento', models.BooleanField(blank=True, null=True)),
                ('mobiliado', models.BooleanField(blank=True, null=True)),
                ('elevador', models.BooleanField(blank=True, null=True)),
                ('tipo_eletricidade', models.CharField(blank=True, choices=[('Gás', 'Gas'), ('Elétrico', 'Eletrico'), ('Gás/Eletrico', 'Gas Eletrico')], max_length=12, null=True)),
                ('capacidade_lotacao', models.IntegerField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('autor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='anuncios', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ImagensAnuncio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagens', models.ImageField(upload_to='imagens/')),
                ('anuncio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='imagens', to='mjmgmt_anuncios.anuncio')),
            ],
        ),
    ]
